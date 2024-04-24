import { useState } from "react";

import { StyledChangeLanguageContainer } from "@/components/ChangeLanguage/ChangeLanguage.styled";

interface ChangeLanguageProps {
  $isOpen?: boolean;
}

enum Language {
  Eng = "Eng",
  Rus = "Рус",
}

export function ChangeLanguage({ $isOpen = false }: ChangeLanguageProps) {
  const [language, setLanguage] = useState(Language.Eng);

  return (
    <StyledChangeLanguageContainer $isOpen={$isOpen}>
      <button
        onClick={() => setLanguage((prev) => (prev === Language.Eng ? Language.Rus : Language.Eng))}
        type="button"
      >
        {language}
      </button>
    </StyledChangeLanguageContainer>
  );
}
