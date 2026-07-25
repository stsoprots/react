import type ICommentDummy from "../../model/Dummyjson/ICommentDummy.ts";
import {useEffect, useState} from "react";
import {service} from "../../../service/api.service.ts";
import {DummyComment} from "./DummyComment.tsx";

export const DummyComments = () => {

    const [comments, setComments] = useState<ICommentDummy[]>([]);

    useEffect(() => {
        service.getDummyComments()
            .then((comments) => {
                setComments(comments);
            })
    }, [])

    return (
        <div>
            {comments.map((comment) => (<DummyComment key={comment.id} comment={comment} />))}
        </div>
    );
};