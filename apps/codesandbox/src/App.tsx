import { Canvas, Container, PassLink, Space, Text } from '@atlrdsgn/kit';

function App() {
  return (
    <div className='App'>
      <Canvas>
        <Container align='center'>
          <Text
            size='xl'
            align='center'
            weight='bold'
            color='white'>
            React, Vite, TypeScipt
          </Text>
          <Text
            size='md'
            weight='normal'
            color='sapphire5'>
            built w/ <strong>AtelierKit</strong>®
          </Text>
        </Container>
        <Space size='sm' />
        <Container
          align='center'
          width='small'>
          <Text
            size='sm'
            font='mono'
            align='center'>
            Edit <code>src/App.tsx</code> and save to test
            <br />
            Hot Module Replacement.
          </Text>
        </Container>
      </Canvas>

      <footer>
        <Text
          size='xs'
          font='system'
          align='center'
          color='slate4'>
          Powered by{' '}
          <PassLink
            font='mono'
            size='xs'
            href='https://ds.atlrdsgn.com'
            target='_blank'>
            <strong>@atlrdsgn/kit</strong> →
          </PassLink>
        </Text>
      </footer>
    </div>
  );
}

export default App;
