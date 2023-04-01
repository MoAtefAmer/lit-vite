import { css } from 'lit';

export const tailwind = css`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    @tailwind variants;

    #app {
        @apply min-h-screen;
    }

    @layer utilities {
        .divide-y > :not([hidden]) {
            --tw-divide-y-reverse: 0;
            border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
            border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
        }
    }
`;

export default tailwind;