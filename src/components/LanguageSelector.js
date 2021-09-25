import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag kenya"
          onClick={() => this.context.onLanguageChange("Swahili")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
