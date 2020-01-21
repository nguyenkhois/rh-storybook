/**
 * View more at https://storybook.js.org/docs/configurations/options-parameter/
 */

import { addParameters } from '@storybook/react';

addParameters({
    options: {
        storySort: (a, b) => a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
});