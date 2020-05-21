import axios from "axios"
import { COMMENT_POST, COMMENT_FETCH } from "./types"

export const commentPost = (comment , id) => {
    return dispatch => {
        axios.post("http://localhost:5000/comments", comment).then( //ต้องแก้โดยการส่งไปที่ DB ของ user แต่ละคน หลังจากนั้นจะดึง ข้อมูลของ User แต่ละคนมาแสดงว่ายืนยันรายการอะไรไปแล้วมั้ง 
            res => {
                axios.get("http://localhost:5000/comments/" + id).then( //ต้องแก้โดยการส่งไปที่ DB ของ user แต่ละคน หลังจากนั้นจะดึง ข้อมูลของ User แต่ละคนมาแสดงว่ายืนยันรายการอะไรไปแล้วมั้ง 
                    res => {
                        dispatch({ type: COMMENT_FETCH, payload: res.data })
                    }
                )
            }
        )
    }
}

export const commentFetch = (id) => {
    return dispatch => {
        axios.get("http://localhost:5000/comments/" + id).then( //ต้องแก้โดยการส่งไปที่ DB ของ user แต่ละคน หลังจากนั้นจะดึง ข้อมูลของ User แต่ละคนมาแสดงว่ายืนยันรายการอะไรไปแล้วมั้ง 
            res => {
                dispatch({ type: COMMENT_FETCH, payload: res.data })
            }
        )
    }
}

/*
export const getUser = (user_id) => {
    return dispatch => {
        axios.get("http://localhost:5000/user/" + user_id).then( //ต้องแก้โดยการส่งไปที่ DB ของ user แต่ละคน หลังจากนั้นจะดึง ข้อมูลของ User แต่ละคนมาแสดงว่ายืนยันรายการอะไรไปแล้วมั้ง
            res => {
                dispatch({ type: GET_USER, payload: res.data })
            }
        )
    }
}

export const resetUser = () => {
    return dispatch => {
        dispatch({ type: RESET_USER })
    }
}

*/