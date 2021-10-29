import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export function onErrorEmptyInput() {
  error({
    title: 'Error!',
    text: 'Enter the query correctly...',
    delay: 2000,
    closerHover: true,
    mouseReset: true,
    shadow: true,
  });
}

export function onErrorNoSuchMatches() {
  error({
    title: 'Error!',
    text: 'No such matches...',
    delay: 2000,
    closerHover: true,
    mouseReset: true,
    shadow: true,
  });
}
