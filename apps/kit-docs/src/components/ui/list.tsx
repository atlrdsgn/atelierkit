import { OlHTMLAttributes } from 'react';

export function TypographyList({
  children,
  ordered,
  start,
  type,
}: {
  children: any;
  ordered: boolean;
  start?: number;
  type?: string;
}) {
  const ListElement = ordered ? 'ol' : 'ul';

  return (
    <ListElement
      style={{
        listStyleType: `${ordered ? type || 'decimal' : type || 'disc'}`,
      }}
      start={start}>
      {children}
    </ListElement>
  );
}
