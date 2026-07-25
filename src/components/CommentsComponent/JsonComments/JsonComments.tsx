import {useEffect, useState} from "react";
import type ICommentJsonPl from "../../model/JsonPlaceholder/ICommentJsonPl.ts";
import {service} from "../../../service/api.service.ts";
import {JsonComment} from "./JsonComment.tsx";

export const JsonComments = () => {

    const [comments, setComments] = useState<ICommentJsonPl[]>([]);

    useEffect(() => {
        service.getJsonPlComments()
            .then(comments => {
                setComments(comments);
            })
    },[])


    return (
        <div>
            {
                comments.map((comment) => (<JsonComment key={comment.id} comment={comment} />))
            }
        </div>
    );
};