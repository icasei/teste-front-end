import React, {useEffect} from 'react';

import VideoPlayer from "./Video/Video.component";
import { VideoMetaData } from "./VideoMetaData/VideoMetaData.component";
import "./WatchVideo.css";
import { RouteChildrenProps, withRouter} from 'react-router-dom';
import { params, Video} from '../../store/type';
import { getParamValue } from "../../utils/uri";
import { connect } from "react-redux";
import { IVideoState } from "../../store/interfaces/IVideoState";
import { GetVideoById } from '../../store/action-creators/action-creator';
