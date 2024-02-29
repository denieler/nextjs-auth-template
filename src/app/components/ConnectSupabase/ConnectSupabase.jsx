'use client'

import { useState, useEffect } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import { twMerge as cx } from 'tailwind-merge'

import { getSupabase } from '../../utils/supabase'

const ConnectSupabase = () => {
  const { user, error, isLoading } = useUser()

  const [todos, setTodos] = useState([])

  console.log(todos)

  useEffect(() => {
    if (!user) return

    const supabase = getSupabase(user.accessToken)

    const fetchTodos = async () => {
      const { data } = await supabase.from('todo').select('*')
      setTodos(data)
    }

    fetchTodos()
  }, [user])

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      {todos.map(todo => <div key={todo.title}>{todo.title}</div>)}
    </>
  )
}

export default ConnectSupabase
