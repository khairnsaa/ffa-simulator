import './style/App.css';
import Router from './Router'

// context
import { ARContextProvider } from './context/ARContext';
import { ModuleContextProvider } from './context/ModuleContext';
import { ArticleContextProvider } from './context/ArticleContext';
import { OutputWaveContextProvider } from './context/OutputWaveContext';
import { OutputResponseProvider } from './context/OutputResponseContext';

function App() {
    return (
        <ARContextProvider>
            <OutputWaveContextProvider>
                <OutputResponseProvider>
                    <ModuleContextProvider>
                        <ArticleContextProvider>
                            <Router />
                        </ArticleContextProvider>
                    </ModuleContextProvider>
                </OutputResponseProvider>
            </OutputWaveContextProvider>
        </ARContextProvider>
    );  
}

export default App;
