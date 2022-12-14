import React, { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

const Movies = lazy(() => import('./movies'));
const MovieDetailPage = lazy(() => import('./movie-detail'));

const ROUTES: RouteObject[] = [
	{
		path: '',
		element: (
			<Suspense
				fallback={
					<>
						<div className="h-screen bg-black" />
					</>
				}
			>
				<Movies />
			</Suspense>
		),
	},
	{
		path: '/:movieId',
		element: (
			<Suspense
				fallback={
					<>
						<div className="h-screen bg-black" />
					</>
				}
			>
				<MovieDetailPage />
			</Suspense>
		),
	},
];

export default ROUTES;
