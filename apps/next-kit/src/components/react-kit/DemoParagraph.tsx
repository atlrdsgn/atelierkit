'use client';

import { Container, Paragraph, Text, Space } from '@atlrdsgn/kit';

export const DemoParagraph = () => {
  return (
    <>
      <Container
        width='medium'
        align='start'>
        <Text
          align='left'
          size='md'
          weight='semibold'
          font='mono'>
          @paragraph [Paragraph]
        </Text>

        <Space size='xl' />
        <Paragraph>
          Anim veniam elit enim. Do do est reprehenderit Lorem cillum enim
          officia minim duis esse ullamco. Dolor dolore qui nisi do in. Amet
          mollit sit eu proident sunt qui non dolor consectetur eu eiusmod
          aliquip occaecat.
        </Paragraph>
        <Space size='lg' />
      </Container>
    </>
  );
};
