import React, { Component } from "react";
import Editor from "draft-js-plugins-editor";
import { EditorState } from "draft-js";
import editorStyles from "./editorStyles.module.css";

import createToolbarPlugin from "draft-js-static-toolbar-plugin";
import buttonStyles from "./buttonStyles.module.css";
import toolbarStyles from "./toolbarStyles.module.css";

import createEmojiPlugin from "draft-js-emoji-plugin";
import "draft-js-emoji-plugin/lib/plugin.css";

const staticToolbarPlugin = createToolbarPlugin({
  theme: {
    toolbarStyles,
    buttonStyles
  }
});
const { Toolbar } = staticToolbarPlugin;

const emojiPlugin = createEmojiPlugin({
  useNativeArt: true
});
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

const plugins = [staticToolbarPlugin, emojiPlugin];

export default class MyEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  onChange = editorState => {
    this.setState({
      editorState
    });
  };

  // focus = () => {
  //   this.editor.focus();
  // };

  render() {
    return (
      <div>
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            // ref={element => {
            //   this.editor = element;
            // }}
          />
          <Toolbar />
          <div className={editorStyles.emojiPicker}>
            <EmojiSuggestions />
          </div>
          <div className={editorStyles.emojiSelect}>
            <EmojiSelect />
          </div>
        </div>
      </div>
    );
  }
}
