import { format } from '@/utils/utils';
import { Component, Prop, h } from '@stencil/core';
import Lambo from './svg/gallardo.svg';

/**
 * This is a simple component that demonstrates how to use Stencil with Tailwind CSS.
 * @slot - In case we use slot
 * @cssprop {Background} [--tw-bg-opacity=0.2] - Something that can be passed as a CSS style
 */
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop({ reflect: true }) first: string = 'My First Name';

  /**
   * The middle name
   */
  @Prop({ reflect: true }) middle: string = 'My Middle Name';

  /**
   * The last name
   */
  @Prop({ reflect: false }) last: string = 'My Last Name';

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div class="grid place-items-center text-white font-bold font-mono bg-green-600 glass rounded-md shadow-md">
        <div class="w-full max-w-6xl gap-4 mb-8 lg:rounded-md bg-opacity-60 ">
          <div class="flex gap-5">
            <div class="flex flex-col">
              <span class="p-4 text-2xl font-semibold uppercase">Card demo</span>
              <div class='size-40' innerHTML={Lambo} />
            </div>
            <div class="grid grid-cols-1 mx-4 md:grid-cols-2 place-items-center">{this.getText()}</div>

          </div>
        </div>
      </div>
    );
  }
}
