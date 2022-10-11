import React, { useCallback, useState } from "react";

export default function useTodo () {
    const [todoItems, setTodoList] = useState([
        {
            item: 'feed dog'
        },
        {
            item: 'bathe dog'
        }
    ]);
      const [currentItem, setCurrentItem] = useState({
        item: ''
      });

    const removeTodoItem = useCallback((index: number, items:{
        item: string,
        order: number,
    }[]) => {
        const newList = [
            ...items.slice(0, index),
            ...items.slice(index + 1),
        ];
        setTodoList(newList);
    }, [])

    const handleTextChange = useCallback((text: string) => {
        setCurrentItem({
            item: text
        })
    }, [])

    const addTodoItem = useCallback((text: string, items: {item: string}[]) => {
        setTodoList([
            ...items,
            {
                item: text
            }
            ])
        setCurrentItem({item: ''})
    }, [])

    return {
        todoItems,
        setTodoList,
        currentItem,
        setCurrentItem,
        removeTodoItem,
        addTodoItem,
        handleTextChange
    }
}