import React, { useEffect, useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const Editor = ({ name, contents, onChange, height }) => {
  const options = {
    mode: "classic",
    rtl: false,
    katex: "window.katex",
    height: height || 300,
    imageGalleryUrl:
      "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",
    videoFileInput: false,
    tabDisable: false,
    buttonList: [
      [
        "undo",
        "redo",
        "font",
        "fontSize",
        "formatBlock",
        "paragraphStyle",
        "blockquote",
        "bold",
        "underline",
        "italic",
        "strike",
        "subscript",
        "superscript",
        "fontColor",
        "hiliteColor",
        "textStyle",
        "removeFormat",
        "outdent",
        "indent",
        "align",
        "horizontalRule",
        "list",
        "lineHeight",
        "table",
        "link",
        "image",
        "video",
        "audio",
        "math",
        "imageGallery",
        "fullScreen",
        "showBlocks",
        "codeView",
        "preview",
        "print",
        "save",
        "template",
      ],
    ],
    "lang(In nodejs)": "en",
  };

  const target_name = name || "description";
  const [editorState, setEditorState] = useState();

  useEffect(() => {
    setEditorState(contents || "");
  }, [contents]);

  const handleChange = (content) => {
    setEditorState(content);
    if (onChange) {
      const target = { name: target_name, value: content };
      onChange({ target });
    }
  };

  return (
    <div>
      <SunEditor
        setOptions={options}
        onChange={handleChange}
        setContents={editorState}
      />
    </div>
  );
};

export default Editor;
