import type React from "react";

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  as?: "section" | "div";
};

export default function Section({ id, className = "", children, as = "section" }: Props) {
  const Tag = as;
  return (
    <Tag id={id} className={`relative px-gutter py-section ${className}`}>
      <div className="mx-auto max-w-[1600px]">{children}</div>
    </Tag>
  );
}

export function SectionLabel({
  children,
  className = "text-brass",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`mb-6 font-body text-sm ${className}`}>{children}</p>;
}
