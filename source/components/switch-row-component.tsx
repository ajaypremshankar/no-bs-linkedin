import * as React from 'react';
import { Row, Col, Switch } from 'antd';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

interface SwitchRowProps {
  label: string;
  id: string;
  checked: boolean;
  onClick: () => void;
}

const SwitchRow = (props: SwitchRowProps) => {
  return (
    <Row>
      <Col span={12}>
        <label>{props.label}</label>
      </Col>
      <Col span={12}>
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked={props.checked}
          id={props.id}
          checked={props.checked}
          onClick={props.onClick} />
      </Col>
    </Row>
  );
}

export default SwitchRow;