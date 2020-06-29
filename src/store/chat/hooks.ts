import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../index";
import { sendMessage, updateMessage } from "./actions";
import { useAuth } from "../system/hooks";

export const useChatInput = () => {
  const inputValue = useSelector((state: RootState) => state.chat.messageInput);
  const { userName } = useAuth();
  const dispatch = useDispatch();
  const submit = useCallback(() => {
    inputValue &&
      dispatch(
        sendMessage({
          message: inputValue,
          user: userName,
          timestamp: new Date().getTime(),
        })
      );
  }, [dispatch, inputValue, userName]);
  const setInputValue = useCallback(
    (value: string) => {
      dispatch(updateMessage(value));
    },
    [dispatch]
  );
  return { inputValue, setInputValue, submit };
};
