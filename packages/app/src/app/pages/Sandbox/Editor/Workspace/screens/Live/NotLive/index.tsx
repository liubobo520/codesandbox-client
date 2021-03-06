import { Collapsible, Element, Text } from '@codesandbox/components';
import React, { FunctionComponent } from 'react';

import { useOvermind } from 'app/overmind';

import { NotOwner } from './NotOwner';
import { Owner } from './Owner';

export const NotLive: FunctionComponent = () => {
  const {
    state: {
      editor: {
        currentSandbox: { owned },
      },
    },
  } = useOvermind();

  return (
    <Collapsible defaultOpen title="Live">
      <Element paddingX={2}>
        <Text block marginBottom={2} weight="medium">
          Collaborate in real-time
        </Text>

        {owned ? <Owner /> : <NotOwner />}
      </Element>
    </Collapsible>
  );
};
