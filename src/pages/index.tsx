import type { Component } from 'solid-js';

import ScreenSection from '@components/ScreenSection';

const Home: Component = () => {
  return (
    <>
      <ScreenSection>
        <h1 class='text-8xl mx-auto my-auto'>DNSWD</h1>
      </ScreenSection>
      <ScreenSection class="bg-yellow-200">
        <h1 class='text-8xl mx-auto my-auto'>QUACK</h1>
      </ScreenSection>
    </>
  );
};

export default Home