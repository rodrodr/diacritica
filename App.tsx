import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { ParallaxSection } from './components/ParallaxSection';
import { SplitSection } from './components/SplitSection';
import { ItemGrid } from './components/ItemGrid';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { Repository } from './components/Repository';
import { MaterialDetail } from './components/MaterialDetail';
import { Methodology } from './components/Methodology';
import { Project } from './components/Project';
import { Publications } from './components/Publications';
import { RepoItem, PublicationItem } from './data';

type ViewState = 'home' | 'repository' | 'material-detail' | 'methodology' | 'project' | 'publications';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedMaterialId, setSelectedMaterialId] = useState<number | null>(null);
  const [repoCategory, setRepoCategory] = useState<string>("Todos");

  // State for external data
  const [repoItems, setRepoItems] = useState<RepoItem[]>([]);
  const [pubItems, setPubItems] = useState<PublicationItem[]>([]);

  // Fetch data on mount
  useEffect(() => {
    // Fetch from public/data.json
    fetch('data.json')
      .then(res => res.json())
      .then(data => {
        if (data.items) setRepoItems(data.items);
        if (data.publications) setPubItems(data.publications);
      })
      .catch(err => console.error("Failed to load content data:", err));
  }, []);

  const navigateTo = (view: ViewState, id?: number, category?: string) => {
    if (id) setSelectedMaterialId(id);
    
    if (category) {
      setRepoCategory(category);
    } else if (view === 'repository' && currentView !== 'material-detail') {
      // Reset to Todos only if not coming back from detail view and no specific category is requested
      setRepoCategory("Todos");
    }

    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const handleItemSelect = (id: number) => {
    setSelectedMaterialId(id);
    setCurrentView('material-detail');
    window.scrollTo(0, 0);
  };

  // Logic for Next Item in detail view
  const selectedItem = repoItems.find(i => i.id === selectedMaterialId);
  const nextItem = selectedItem 
    ? repoItems.find(i => i.id === (selectedItem.id % repoItems.length) + 1) || repoItems[0]
    : undefined;

  return (
    <div className="w-full min-h-screen flex flex-col font-sans text-brand-dark selection:bg-brand-red selection:text-white">
      <Navbar currentView={currentView} onNavigate={(view) => navigateTo(view)} />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero />
            <Intro onNavigate={(view) => navigateTo(view)} />
            <ParallaxSection 
              text="enfoque de IA supervisado por docentes"
              buttonText="Detalles del Proyecto"
              imageSrc="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000"
              onButtonClick={() => navigateTo('project')}
            />
            <SplitSection onNavigate={(view) => navigateTo(view)} />
            <ItemGrid onCategorySelect={(cat) => navigateTo('repository', undefined, cat)} />
            <Team />
          </>
        )}

        {currentView === 'repository' && (
          <Repository 
            items={repoItems}
            onItemSelect={handleItemSelect} 
            initialCategory={repoCategory} 
          />
        )}
        
        {currentView === 'methodology' && (
          <Methodology />
        )}

        {currentView === 'project' && (
          <Project />
        )}

        {currentView === 'publications' && (
          <Publications items={pubItems} />
        )}

        {currentView === 'material-detail' && selectedItem && (
          <MaterialDetail 
            item={selectedItem} 
            nextItem={nextItem}
            onBack={() => navigateTo('repository')}
            onNavigateTo={handleItemSelect}
          />
        )}
      </main>

      <Footer onNavigate={(view) => navigateTo(view as any)} />
    </div>
  );
};

export default App;