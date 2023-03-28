export interface ProfileCardProps {
  goToSection: React.MutableRefObject<HTMLDivElement | null>;
}

export interface TextElement {
  children: React.ReactNode;
  fontSize: string;
  fontWeight?: number;
}
