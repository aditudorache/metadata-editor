import * as React from 'react';

import Item from './Item';
import Wrapper from './Wrapper';

function ListItem(props: any) {
  return (
    <Wrapper>
      <Item>{props.item}</Item>
    </Wrapper>
  );
}

export default ListItem;
