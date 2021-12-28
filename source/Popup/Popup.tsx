import * as React from 'react';
import { Row, Col, Card, Slider, Switch } from 'antd';
import { AppConfig } from '../types/AppConfig';
import { StorageService } from '../service/storage-service';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './styles.scss';

const Popup: React.FC = () => {

  const [appState, setAppState] = React.useState<AppConfig>({
    hideReactions: false,
    hideSidebar: false,
    hideMessageBubble: false,
    hidePolls: false,
    hideComments: false,
    hideFeedSource: false,
    paddingOnPosts: 0,
    marginOnPosts: 0,
    scale: 100
  });

  React.useEffect(() => {
    StorageService.getConfig("no-bs-li-config", function (config) {
      setAppState(config);
    });
  }, []);

  const toggleHideReactions = () => {

    const newState: AppConfig = {
      ...appState,
      hideReactions: !appState.hideReactions
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  const toggleHideSidebar = () => {
    const newState: AppConfig = {
      ...appState,
      hideSidebar: !appState.hideSidebar
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  const toggleHideMessageBubble = () => {
    const newState: AppConfig = {
      ...appState,
      hideMessageBubble: !appState.hideMessageBubble
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  const toggleHidePolls = () => {

    const newState: AppConfig = {
      ...appState,
      hidePolls: !appState.hidePolls
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  const toggleHideComments = () => {

    const newState: AppConfig = {
      ...appState,
      hideComments: !appState.hideComments
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  const toggleHideFeedSource = () => {

    const newState: AppConfig = {
      ...appState,
      hideFeedSource: !appState.hideFeedSource
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  const setMarginOnPosts = (num: number) => {

    const newState: AppConfig = {
      ...appState,
      marginOnPosts: num
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  const setPaddingOnPosts = (num: number) => {

    const newState: AppConfig = {
      ...appState,
      paddingOnPosts: num
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  const setScale = (num: number) => {

    const newState: AppConfig = {
      ...appState,
      scale: num
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  return (
    <>
      <Card style={{ width: 400 }}>
        <Row>
          <Col span={12}>
            <label>Scale {appState.scale}</label>
          </Col>
          <Col span={12}>
            <Slider
              min={0}
              defaultValue={1}
              max={2}
              step={0.1}
              onChange={setScale}
              value={typeof appState.scale === 'number' ? appState.scale : 1}
            />
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <label>Padding on posts: {appState.paddingOnPosts}px</label>

          </Col>
          <Col span={12}>
            <Slider
              min={0}
              defaultValue={5}
              max={20}
              step={1}
              onChange={setPaddingOnPosts}
              value={typeof appState.paddingOnPosts === 'number' ? appState.paddingOnPosts : 5}
            />
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <label>Margin on posts: {appState.marginOnPosts}px</label>

          </Col>
          <Col span={12}>
            <Slider
              min={0}
              defaultValue={0}
              max={20}
              step={1}
              onChange={setMarginOnPosts}
              value={typeof appState.marginOnPosts === 'number' ? appState.marginOnPosts : 0}
            />
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <label>Hide Polls</label>
          </Col>
          <Col span={12}>
            <Switch
              id='hide-polls'
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              onClick={() => toggleHidePolls()}
              checked={appState.hidePolls}
              defaultChecked={appState.hidePolls}
            />
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <label>Hide Feed source</label>
          </Col>
          <Col span={12}>
            <Switch id='hide-feed-source'
              checked={appState.hideFeedSource}
              onClick={() => toggleHideFeedSource()} />
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <label>Hide sidebar</label>
          </Col>
          <Col span={12}>
            <Switch id='hide-sidebar'
              checked={appState.hideSidebar}
              onClick={() => toggleHideSidebar()} />
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <label>Hide Message bubble</label>
          </Col>
          <Col span={12}>
            <Switch id='hide-message-bubble'
              checked={appState.hideMessageBubble}
              onClick={() => toggleHideMessageBubble()} />
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <label>Hide Reactions</label>
          </Col>
          <Col span={12}>
            <Switch id='hide-reactions'
              checked={appState.hideReactions}
              onClick={() => toggleHideReactions()} />
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <label>Hide Comments</label>
          </Col>
          <Col span={12}>
            <Switch id='hide-comments'
              checked={appState.hideComments}
              onClick={() => toggleHideComments()} />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Popup;
