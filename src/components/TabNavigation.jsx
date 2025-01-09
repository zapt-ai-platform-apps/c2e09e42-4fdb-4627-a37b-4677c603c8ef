import React from 'react';
import { NavLink } from 'react-router-dom';

export default function TabNavigation() {
    return (
        <nav className="bg-white shadow-md">
            <ul className="flex flex-col sm:flex-row justify-around">
                <li className="w-full sm:w-auto">
                    <NavLink
                        to="/planning"
                        className={({ isActive }) =>
                            `block text-center py-3 px-4 ${
                                isActive ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-400'
                            } cursor-pointer`
                        }
                    >
                        Planning
                    </NavLink>
                </li>
                <li className="w-full sm:w-auto">
                    <NavLink
                        to="/management"
                        className={({ isActive }) =>
                            `block text-center py-3 px-4 ${
                                isActive ? 'text-green-600 font-bold border-b-2 border-green-600' : 'text-gray-600 hover:text-green-400'
                            } cursor-pointer`
                        }
                    >
                        Management
                    </NavLink>
                </li>
                <li className="w-full sm:w-auto">
                    <NavLink
                        to="/accounting"
                        className={({ isActive }) =>
                            `block text-center py-3 px-4 ${
                                isActive ? 'text-orange-600 font-bold border-b-2 border-orange-600' : 'text-gray-600 hover:text-orange-400'
                            } cursor-pointer`
                        }
                    >
                        Accounting
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}