import { withHighlight } from "../hoc/withHighlight";
import { Video } from "../Video/Video";
import { Article } from "../Article/Article";

const VideoHighlight = withHighlight(Video);
const ArticleHighlight = withHighlight(Article);





export function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoHighlight {...item} />
                );

            case 'article':
                return (
                    <ArticleHighlight {...item} />
                );
        }
    });
};