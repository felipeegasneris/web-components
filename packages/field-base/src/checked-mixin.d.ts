/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { DelegateStateMixin } from './delegate-state-mixin.js';
import { DisabledMixin } from './disabled-mixin.js';
import { InputMixin } from './input-mixin.js';

/**
 * A mixin to manage the checked state.
 */
declare function CheckedMixin<T extends new (...args: any[]) => {}>(base: T): T & CheckedMixinConstructor;

interface CheckedMixinConstructor {
  new (...args: any[]): CheckedMixin;
}

interface CheckedMixin extends DelegateStateMixin, DisabledMixin, InputMixin {}

export { CheckedMixinConstructor, CheckedMixin };