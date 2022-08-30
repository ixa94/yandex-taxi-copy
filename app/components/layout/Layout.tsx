import React, { FC, ReactNode } from 'react'

type Props = {
  title:string;
  children?: ReactNode;
}

export const Layout:FC<Props> = ({ title, children}) =>{
  return (
    <div>{children}</div>
  )
}


