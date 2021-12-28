import * as React from 'react';
import { Row, Col, Switch } from 'antd';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

interface SwitchRowProps {
  label: string;
  id: string;
  checked: boolean;
  onClick: () => void;
}

const SwitchRow = (props: SwitchRowProps) => {
  return (
    <Row style={{ margin: '8px' }}>
      <Col span={12}>
        <label>{props.label}</label>
      </Col>
      <Col span={12}>
        <Switch
          checkedChildren={'Hidden'}
          unCheckedChildren={'Visible'}
          defaultChecked={props.checked}
          id={props.id}
          checked={props.checked}
          onClick={props.onClick} />
      </Col>
    </Row>
  );
}

export default SwitchRow;