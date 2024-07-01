import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LanguageSelectProps {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({
  language,
  setLanguage,
}) => {
  return (
    <Select
      name="language"
      value={language}
      onValueChange={(language) => setLanguage(language)}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="javascript">Javascript</SelectItem>
          <SelectItem value="typescript">Typescript</SelectItem>
          <SelectItem value="python">Python</SelectItem>
          <SelectItem value="java">Java</SelectItem>
          <SelectItem value="go">Go</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelect;
