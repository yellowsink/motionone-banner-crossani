import {
  Accessor,
  Component,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";
import { EASE } from "crossani";
import crossani from "solid-crossani";
false && crossani;

interface MoverProps {
  trigger: Accessor<string>;
  fromZ?: number;
  toZ?: number;
}

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const Movement: Component = () => {
  const [trigger, setTrigger] = createSignal<string>();

  let shouldCancel = false;

  onMount(async () => {
    while (true) {
      if (shouldCancel) return;

      setTrigger("right");
      setTrigger("left");

      await sleep(3000);
    }
  });

  onCleanup(() => shouldCancel);

  return (
    <div class="flex flex-nowrap relative top-[calc(50%-100px)] preserve-3d transform translate-x-[calc(-240px-290px-20px)] translate-z-px">
      <Mover trigger={trigger} />
      <Mover trigger={trigger} fromZ={100} />
      <Mover trigger={trigger} toZ={100} />
      <Mover trigger={trigger} />
      <Mover trigger={trigger} />
    </div>
  );
};

const moverClasses =
  "bg-yellow border-3 border-black rounded-lg w-[290px] h-[190px] mr-[20px] flex-shrink-0";

const Mover: Component<MoverProps> = (props) => (
  <div
    use:crossani={props.trigger}
    // @ts-expect-error
    prop:transitions={{
      right: {
        state: {
          transform: `translateX(calc(290px + 20px)) translateZ(${
            props.fromZ ?? 0
          }px)`,
        },
        ms: 0,
        easing: EASE.endSteps(1),
      },
      left: {
        state: {},
        reset: true,
        ms: 750,
        easing: EASE.ease,
      },
    }}
    class={moverClasses}
    style={{ transform: `translateZ(${props.toZ ?? 0}px)` }}
  />
);
