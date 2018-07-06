import { browser } from 'protractor';
import { CallbackStepDefinition, defineSupportCode, Hooks, StepDefinitions } from 'cucumber';

defineSupportCode(({Before, setDefaultTimeout}: StepDefinitions & Hooks) => {
  const DEFAULT_PAGE_LOAD_TIMEOUT_SECONDS: number = 100 * 1000;
  const BEFORE_FEATURE_TIMEOUT: number = 5 * 1000;
  setDefaultTimeout(DEFAULT_PAGE_LOAD_TIMEOUT_SECONDS);
  Before((event: any, callback: CallbackStepDefinition) => {
    setTimeout(callback, BEFORE_FEATURE_TIMEOUT);
  });
  });
