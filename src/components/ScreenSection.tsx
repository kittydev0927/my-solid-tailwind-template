import type { ParentComponent } from 'solid-js';

const ScreenSection: ParentComponent<{class?: string}> = (props) => {
    return (
      <section class={"h-screen w-screen flex " + props.class} >
        {props.children}
      </section>
    );
  };
  
  export default ScreenSection