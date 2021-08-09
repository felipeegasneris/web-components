/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-material-styles/font-icons.js';

registerStyles(
  'vaadin-password-field',
  css`
    [part='reveal-button']::before {
      content: var(--material-icons-eye);
    }

    :host([password-visible]) [part='reveal-button']::before {
      content: var(--material-icons-eye-disabled);
    }

    /* The reveal button works also in readonly mode */
    :host([readonly]) [part$='button'] {
      color: var(--material-secondary-text-color);
    }

    [part='reveal-button'] {
      position: relative;
      cursor: pointer;
    }

    [part='reveal-button']:hover {
      color: var(--material-text-color);
    }

    [part='reveal-button'][hidden] {
      display: none !important;
    }

    ::slotted([slot='reveal']) {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      background: transparent;
      border: none;
    }
  `,
  { moduleId: 'material-password-field' }
);