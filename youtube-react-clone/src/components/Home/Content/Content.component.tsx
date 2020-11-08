import React, { useState, useEffect } from 'react';
import { VideoGrid } from './VideoGrid/VideoGrid.component';
import './Content.css';
import { InfiniteScroll } from '../../InfiniteScroll/InfiniteScroll.component';
import { connect } from "react-redux";
import { IVideoState } from '../../../store/interfaces/IVideoState';
import { LoadPopularVideos, GetCategories, GetVideosByCategories, VideosLoading } from '../../../store/action-creators/action-creator';
import { Video, VideoCategory, VideoByCategory } from '../../../store/types';

interface IContent {
    isYoutubeClientLoaded: boolean;
    videos: Video[];
    videosByCategories: VideoByCategory;
    categories: VideoCategory[];
    videosLoading: boolean;
    LoadPopularVideos(): void;
    LoadCategories(): void;
    SetVideosLoading(): void;
    LoadVideosByCategories(categories: VideoCategory[]): void;
}

const Content = (props: IContent) => {

    const grid = <VideoGrid videos={props.videos} title="Recommended" showDivider />;

    const categoriesName = Object.keys(props.videosByCategories);

    const gridByCategories = categoriesName.map((key: string, index: number) => {

        let showDivider: boolean = (index !== categoriesName.length - 1)

        return <VideoGrid key={key} videos={props.videosByCategories[key]} title={key} showDivider={showDivider} />
    });

    const [categoryIndex, setCategoryIndex] = useState(0);

    if (categoryIndex == 0 && props.categories && props.categories.length > 0) {
        props.SetVideosLoading();
        props.LoadVideosByCategories([props.categories[categoryIndex]]);
        setCategoryIndex((currentIndex: number) => currentIndex += 1);
    }

    const onCallBack = () => {
        let categoriesToFetch: VideoCategory[] = props.categories.slice(categoryIndex, categoryIndex + 2);
        props.SetVideosLoading();
        props.LoadVideosByCategories(categoriesToFetch);
        setCategoryIndex((currentIndex: number) => currentIndex += 2);
    }

    useEffect(() => {
        if (props.isYoutubeClientLoaded) {
            props.LoadPopularVideos();
            props.LoadCategories();
        }
    }, [props.isYoutubeClientLoaded])

    return <InfiniteScroll callBack={onCallBack} isLoading={props.videosLoading}><div className="video_content">
        <div className="video_content_container">
            {grid}
            {gridByCategories}
        </div>
    </div>
    </InfiniteScroll>
}

const mapStateToProps = (state: IVideoState) => {
    return {
        isYoutubeClientLoaded: state.isYoutubeClientLoaded,
        videos: state.videos,
        categories: state.categories,
        videosByCategories: state.videosByCategories,
        videosLoading: state.videosLoading
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        LoadPopularVideos: () => dispatch(LoadPopularVideos()),
        LoadCategories: () => dispatch(GetCategories()),
        LoadVideosByCategories: (categories: VideoCategory[]) => dispatch(GetVideosByCategories(categories)),
        SetVideosLoading: () => dispatch(VideosLoading())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)