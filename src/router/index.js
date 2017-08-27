import Vue from 'vue'
import Router from 'vue-router'
import Indexpage  from '../pages/index'
import Details from '../components/details'
import ForecastPage  from '../components/details/Forecast'
import AnalysisPage  from '../components/details/analysis'
import CountPage  from '../components/details/count'
import PublishPage  from '../components/details/publish'



Vue.use(Router)

export default new Router({
	mode:"history",
	routes: [
		{
		  path: '/',
		  name: 'Indexpage',
		  component: Indexpage
		},
		{
		  path: '/details',
		  name: 'Details',
		  component: Details,
		  redirect: '/details/analysis',
		  children:[
		  	{
		  		path:"forecast",
		  		component:ForecastPage
		  	},
		  	{
		  		path:"analysis",
		  		component:AnalysisPage
		  	},
		  	{
		  		path:"count",
		  		component:CountPage
		  	},
		  	{
		  		path:"publish",
		  		component:PublishPage
		  	},
		  ]
		}
	]
})
 
