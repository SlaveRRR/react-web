import React, { FC, useContext } from 'react'


import NavBar from './components/NavBar';
import MainRouter from './app/routing';
import { ConfigProvider } from 'antd';
import { ctx } from './context';
import GlobalStyles from './global-styles';


const App: FC = () => {

  const {theme} = useContext(ctx)

  return (

    <>
      <ConfigProvider
      theme={{
        components:{
          Menu:{
            algorithm:true,
            ...theme.Menu
          },
          Typography:{
            algorithm:true,
            ...theme.Typography
          },
          Divider:{
            algorithm:true,
            ...theme.Divider
          },
          Statistic:{
            algorithm:true,
          
            ...theme.Statistic
          },
          Avatar:{
            colorTextPlaceholder:'#636363'
          }
         
        }
      }}
      >
        <NavBar />
        <MainRouter />
      </ConfigProvider>
      <GlobalStyles mode={theme.mode}/>

    </>
  )

}
export default App


