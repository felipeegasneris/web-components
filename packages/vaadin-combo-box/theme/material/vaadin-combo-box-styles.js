import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-material-styles/color.js';
import '@vaadin/vaadin-material-styles/font-icons.js';
import { inputFieldShared } from '@vaadin/vaadin-material-styles/mixins/input-field-shared.js';

const comboBox = css`
  :host {
    display: inline-flex;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='toggle-button']::before {
    content: var(--material-icons-dropdown);
  }

  :host([opened]) [part='toggle-button'] {
    transform: rotate(180deg);
  }
`;

registerStyles('vaadin-combo-box', [inputFieldShared, comboBox], { moduleId: 'material-combo-box' });
