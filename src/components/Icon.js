import React from 'react';
import styled from 'styled-components';

const icons = {
  github: 'M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z',
  twitter: 'M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z',
  medium: 'M9.328 6.578v18.328c0 0.484-0.234 0.938-0.766 0.938-0.187 0-0.359-0.047-0.516-0.125l-7.266-3.641c-0.438-0.219-0.781-0.781-0.781-1.25v-17.813c0-0.391 0.187-0.75 0.609-0.75 0.25 0 0.469 0.125 0.688 0.234l7.984 4c0.016 0.016 0.047 0.063 0.047 0.078zM10.328 8.156l8.344 13.531-8.344-4.156v-9.375zM28 8.437v16.469c0 0.516-0.297 0.875-0.812 0.875-0.266 0-0.516-0.078-0.734-0.203l-6.891-3.437zM27.953 6.563c0 0.063-8.078 13.172-8.703 14.172l-6.094-9.906 5.063-8.234c0.172-0.281 0.484-0.438 0.812-0.438 0.141 0 0.281 0.031 0.406 0.094l8.453 4.219c0.031 0.016 0.063 0.047 0.063 0.094z',
  linkedin: 'M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z',
  world: 'M15.5 0c-8.561 0-15.5 6.939-15.5 15.5s6.939 15.5 15.5 15.5 15.5-6.939 15.5-15.5-6.939-15.5-15.5-15.5zM28.975 15h-5.996c-0.055-2.215-0.449-4.331-1.148-6.268 1.35-0.563 2.598-1.312 3.736-2.197 2.023 2.271 3.288 5.22 3.408 8.465zM14.947 28.972c-1.662-1.384-3.056-3.181-4.076-5.268 1.309-0.409 2.696-0.633 4.129-0.679v5.949c-0.018 0-0.035-0.001-0.053-0.002zM16.051 2.028c1.886 1.57 3.425 3.673 4.466 6.126-1.426 0.487-2.941 0.77-4.518 0.82v-6.949c0.019 0.001 0.035 0.002 0.052 0.003zM17.717 2.198c2.76 0.459 5.236 1.748 7.164 3.614-1.047 0.803-2.191 1.483-3.428 1.998-0.91-2.157-2.187-4.064-3.736-5.612zM15 2.025v6.949c-1.577-0.051-3.093-0.333-4.518-0.82 1.041-2.453 2.58-4.556 4.466-6.126 0.018-0.001 0.034-0.002 0.052-0.003zM9.546 7.811c-1.235-0.515-2.38-1.195-3.427-1.998 1.927-1.866 4.404-3.155 7.164-3.614-1.55 1.547-2.826 3.454-3.737 5.612zM10.105 9.076c1.542 0.535 3.185 0.847 4.895 0.899v5.025h-5.979c0.054-2.094 0.425-4.095 1.084-5.924zM15 16v6.025c-1.577 0.048-3.102 0.306-4.539 0.769-0.866-2.062-1.377-4.359-1.44-6.794h5.979zM13.283 28.802c-2.473-0.411-4.719-1.488-6.545-3.052 0.985-0.683 2.050-1.261 3.188-1.7 0.872 1.808 2.013 3.413 3.357 4.752zM16 28.975v-5.949c1.432 0.046 2.82 0.27 4.129 0.679-1.021 2.087-2.414 3.884-4.076 5.268-0.017 0-0.035 0.001-0.053 0.002zM21.074 24.050c1.137 0.439 2.201 1.018 3.188 1.7-1.826 1.563-4.072 2.641-6.545 3.052 1.344-1.339 2.484-2.944 3.357-4.752zM20.539 22.794c-1.438-0.463-2.963-0.721-4.539-0.769v-6.025h5.979c-0.063 2.435-0.575 4.732-1.44 6.794zM16 15v-5.025c1.709-0.052 3.352-0.363 4.895-0.898 0.658 1.829 1.029 3.83 1.084 5.924h-5.979zM5.434 6.535c1.138 0.885 2.386 1.634 3.735 2.197-0.699 1.937-1.093 4.053-1.148 6.268h-5.996c0.12-3.245 1.385-6.194 3.409-8.465zM2.025 16h5.996c0.062 2.555 0.596 4.968 1.503 7.137-1.267 0.494-2.448 1.152-3.538 1.931-2.348-2.337-3.83-5.532-3.961-9.068zM25.014 25.067c-1.090-0.778-2.271-1.437-3.539-1.931 0.908-2.169 1.441-4.582 1.504-7.137h5.996c-0.131 3.537-1.614 6.732-3.961 9.068z'
};

const Svg = styled.svg`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;

export function Icon({ icon }) {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32">
      <path d={icons[icon]} />
    </Svg>
  );
}
