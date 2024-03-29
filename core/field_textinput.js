/**
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * http://code.google.com/p/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Text input field.  Used for editable titles and variables.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Class for an editable text field.
 * @param {string} text The initial content of the field.
 * @param {Function} opt_validationFunc An optional function that is called
 *     to validate any constraints on what the user entered.  Takes the new
 *     text as an argument and returns the accepted text or null to abort
 *     the change.
 * @extends Blockly.Field
 * @constructor
 */
Blockly.FieldTextInput = function(text, opt_validationFunc) {
  // Call parent's constructor.
  Blockly.Field.call(this, text);
  this.validationFunc_ = opt_validationFunc;
};

// FieldTextInput is a subclass of Field.
goog.inherits(Blockly.FieldTextInput, Blockly.Field);

/**
 * Set the text in this field.
 * @param {string} text New text.
 */
Blockly.FieldTextInput.prototype.setText = function(text) {
  if (this.validationFunc_) {
    var validated = this.validationFunc_(text);
    // If the new text is invalid, validation returns null.
    // In this case we still want to display the illegal result.
    if (validated !== null) {
      text = validated;
    }
  }
  Blockly.Field.prototype.setText.call(this, text);
};

/**
 * Create and inject the editable text field's elements into the workspace.
 * @param {!Element} workspaceSvg The canvas for the relevant workspace.
 * @private
 */
Blockly.FieldTextInput.injectDom_ = function(workspaceSvg) {
  /*
  <foreignObject class="blocklyHidden" height="22">
    <body xmlns="http://www.w3.org/1999/xhtml" class="blocklyMinimalBody">
      <input class="blocklyHtmlInput" xmlns="http://www.w3.org/1999/xhtml"/>
    </body>
  </foreignObject>
  */
  var foreignObject = Blockly.createSvgElement('foreignObject',
      {'height': 22}, workspaceSvg);
  Blockly.FieldTextInput.svgForeignObject_ = foreignObject;
  // Can't use 'Blockly.createSvgElement' since this is not in the SVG NS.
  var body = goog.dom.createDom('body', 'blocklyMinimalBody');
  var input = goog.dom.createDom('input', 'blocklyHtmlInput');
  Blockly.FieldTextInput.htmlInput_ = input;
  body.appendChild(input);
  foreignObject.appendChild(body);
};

/**
 * Dispose of the editable text field's elements.
 * @private
 */
Blockly.FieldTextInput.disposeDom_ = function() {
  goog.dom.removeNode(Blockly.FieldTextInput.svgForeignObject_);
  Blockly.FieldTextInput.svgForeignObject_ = null;
  Blockly.FieldTextInput.htmlInput_ = null;
};

/**
 * Mouse cursor style when over the hotspot that initiates the editor.
 */
Blockly.FieldTextInput.prototype.CURSOR = 'text';

/**
 * Show the inline free-text editor on top of the text.
 * @private
 */
Blockly.FieldTextInput.prototype.showEditor_ = function() {
  if (window.opera) {
    /* HACK:
     The current version of Opera (12.00) does not support foreignObject
     content.  Instead of presenting an inline editor, use a modal prompt.
     If Opera starts supporting foreignObjects, then delete this entire hack.
    */
    var newValue = window.prompt(Blockly.MSG_CHANGE_VALUE_TITLE, this.text_);
    if (this.validationFunc_) {
      newValue = this.validationFunc_(newValue);
    }
    if (newValue !== null) {
      this.setText(newValue);
    }
    return;
  }
  var workspaceSvg = this.sourceBlock_.workspace.getCanvas();
  Blockly.FieldTextInput.injectDom_(workspaceSvg);
  var htmlInput = Blockly.FieldTextInput.htmlInput_;
  htmlInput.value = htmlInput.defaultValue = this.text_;
  htmlInput.oldValue_ = null;
  var htmlInputFrame = Blockly.FieldTextInput.svgForeignObject_;
  var xy = Blockly.getAbsoluteXY_(/** @type {!Element} */ (this.borderRect_));
  var baseXy = Blockly.getAbsoluteXY_(workspaceSvg);
  xy.x -= baseXy.x;
  xy.y -= baseXy.y;
  if (!Blockly.RTL) {
    htmlInputFrame.setAttribute('x', xy.x + 1);
  }
  if (goog.userAgent.GECKO) {
    htmlInputFrame.setAttribute('y', xy.y - 1);
  } else {
    htmlInputFrame.setAttribute('y', xy.y - 3);
  }
  htmlInput.focus();
  htmlInput.select();
  // Bind to blur -- close the editor on loss of focus.
  htmlInput.onBlurWrapper_ =
      Blockly.bindEvent_(htmlInput, 'blur', this, this.onHtmlInputBlur_);
  // Bind to keyup -- trap Enter and Esc; resize after every keystroke.
  htmlInput.onKeyUpWrapper_ =
      Blockly.bindEvent_(htmlInput, 'keyup', this, this.onHtmlInputChange_);
  // Bind to keyPress -- repeatedly resize when holding down a key.
  htmlInput.onKeyPressWrapper_ =
      Blockly.bindEvent_(htmlInput, 'keypress', this, this.onHtmlInputChange_);
  htmlInput.onWorkspaceChangeWrapper_ =
      Blockly.bindEvent_(workspaceSvg, 'blocklyWorkspaceChange', this,
      this.resizeEditor_);
  this.validate_();
  this.resizeEditor_();
};

/**
 * Handle a blur event on an editor.
 * @param {!Event} e Blur event.
 * @private
 */
Blockly.FieldTextInput.prototype.onHtmlInputBlur_ = function(e) {
  this.closeEditor_(true);
};

/**
 * Handle a change to the editor.
 * @param {!Event} e Keyboard event.
 * @private
 */
Blockly.FieldTextInput.prototype.onHtmlInputChange_ = function(e) {
  if (e.keyCode == 13) {
    // Enter
    this.closeEditor_(true);
  } else if (e.keyCode == 27) {
    // Esc
    this.closeEditor_(false);
  } else {
    // Update source block.
    var htmlInput = Blockly.FieldTextInput.htmlInput_;
    var text = htmlInput.value;
    if (text !== htmlInput.oldValue_) {
      htmlInput.oldValue_ = text;
      this.setText(text);
      this.validate_();
    }
  }
};

/**
 * Check to see if the contents of the editor validates.
 * Style the editor accordingly.
 * @private
 */
Blockly.FieldTextInput.prototype.validate_ = function() {
  var valid = true;
  var htmlInput = Blockly.FieldTextInput.htmlInput_;
  if (this.validationFunc_) {
    valid = this.validationFunc_(htmlInput.value);
  }
  if (valid) {
    Blockly.removeClass_(htmlInput, 'blocklyInvalidInput');
  } else {
    Blockly.addClass_(htmlInput, 'blocklyInvalidInput');
  }
};

/**
 * Resize the editor and the underlying block to fit the text.
 * @private
 */
Blockly.FieldTextInput.prototype.resizeEditor_ = function() {
  var htmlInput = Blockly.FieldTextInput.htmlInput_;
  var bBox = this.group_.getBBox();
  var htmlInputFrame = Blockly.FieldTextInput.svgForeignObject_;
  htmlInputFrame.setAttribute('width', bBox.width);
  htmlInput.style.width = (bBox.width - 2) + 'px';
  // In RTL mode block titles and LTR input titles the left edge moves,
  // whereas the right edge is fixed.  Reposition the editor.
  var xy = Blockly.getAbsoluteXY_(this.group_);
  var workspaceSvg = this.sourceBlock_.workspace.getCanvas();
  var baseXy = Blockly.getAbsoluteXY_(workspaceSvg);
  xy.x -= baseXy.x;
  htmlInputFrame.setAttribute('x', xy.x - 4);
};

/**
 * Close the editor and optionally save the results.
 * @param {boolean} save True if the result should be saved.
 * @private
 */
Blockly.FieldTextInput.prototype.closeEditor_ = function(save) {
  var htmlInput = Blockly.FieldTextInput.htmlInput_;
  Blockly.unbindEvent_(htmlInput.onBlurWrapper_);
  Blockly.unbindEvent_(htmlInput.onKeyUpWrapper_);
  Blockly.unbindEvent_(htmlInput.onKeyPressWrapper_);
  Blockly.unbindEvent_(htmlInput.onWorkspaceChangeWrapper_);

  var text;
  if (save) {
    // Save the edit (if it validates).
    text = htmlInput.value;
    if (this.validationFunc_) {
      text = this.validationFunc_(text);
      if (text === null) {
        // Invalid edit.
        text = htmlInput.defaultValue;
      }
    }
  } else {
    // Canceling edit.
    text = htmlInput.defaultValue;
  }
  this.setText(text);
  Blockly.FieldTextInput.disposeDom_();
  this.sourceBlock_.render();
};
