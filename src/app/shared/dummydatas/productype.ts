import { ProductType } from "../interfaces/product-type"

export const prodtypes: ProductType[] = [
    {name: 'Power Tools', slug: 'power-tools', active:true, id:'random-string-101', child: 
		[
			{name: 'Workbenches', slug: 'workbenches', active:true, id:'random-string-102'},
			{name: 'Presses', slug: 'presses', active:true, id:'random-string-103'},
			{name: 'Spray Guns',slug: 'sprayguns', active:true, id:'random-string-104'},
			{name: 'Riveters',slug: 'riveters', active:true, id:'random-string-105', child:[
				{name: 'ASD', slug: 'asd', active:true, id:'random-string-121'},
				{name: 'DFG', slug: 'dfg', active:true, id:'random-string-122'},
				{name: 'ÍYX', slug: 'iyx', active:true, id:'random-string-123'},
			]},
		]},
	{name: 'Power Machinery', slug: 'power-machinery', active:true, id:'random-string-110'}
];
