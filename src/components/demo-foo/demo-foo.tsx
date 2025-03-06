import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'demo-foo',
  styleUrl: 'demo-foo.css',
  shadow: true,
})
export class DemoFoo {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
