// GALERIE SCRIPT FÜR 20 BILDER
// Speichere als script.js in deinem Website-Ordner

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Galerie mit 20 Bildern geladen!');
    
    // ========== HIER SIND DEINE 20 BILDER ==========
    // ÄNDERE NUR DIE BILD-PFADE UND BESCHREIBUNGEN!
    
    const alleBilder = [
        // Bild 1
        { 
            src: "bilder/spieler.jpg", 
            title: "Erstes Aufwärmen", 
            desc: "Unsere Spieler beim aufwärmen - wie echte Profis!" 
        },
        
        // Bild 2
        { 
            src: "bilder/bild2.jpg", 
            title: "Herbst Camp", 
            desc: "Alle Teilnehmer des Futbolia Herbstcamps!" 
        },
        
        // Bild 3
        { 
            src: "bilder/bild3.jpg", 
            title: "Trainingseinheit", 
            desc: "Erste Trainingseinheit als Team." 
        },
        
        // Bild 4
        { 
            src: "bilder/bild4.jpg", 
            title: "Fitness-Session", 
            desc: "Konditions- und Krafttraning" 
        },
        
        // Bild 5
        { 
            src: "bilder/bild5.jpg", 
            title: "Hochwertiges Equipment", 
            desc: "Unsere Spieler kriegen nur das beste equipment." 
        },
        
        // Bild 6
        { 
            src: "bilder/bild6.jpg", 
            title: "Taktik Besprechung", 
            desc: "Entwicklung von besserem Spielverständnis" 
        },
        
        // Bild 7
        { 
            src: "bilder/bild7.jpg", 
            title: "Dribbling", 
            desc: "Freestyle und Dribbling" 
        },
        
        // Bild 8
        { 
            src: "bilder/bild8.jpg", 
            title: "Plakate", 
            desc: "Seien auch Sie das nächste Mal dabei!" 
        },
        
        // Bild 9
        { 
            src: "bilder/bild9.jpg", 
            title: "Kleingruppen-Training", 
            desc: "Training in Kleingruppen" 
        },
        
        // Bild 10
        { 
            src: "bilder/bild10.jpg", 
            title: "Freundschaften", 
            desc: "Erste Freundschaften bilden sich." 
        },
        
        /*
        // Bild 11
        { 
            src: "bilder/bild11.jpg", 
            title: "Regen Training", 
            desc: "Auch bei schlechtem Wetter sind wir aktiv" 
        },
        
        // Bild 12
        { 
            src: "bilder/bild12.jpg", 
            title: "Sommer Camp", 
            desc: "Spezielle Trainingseinheiten im Sommercamp" 
        },
        
        // Bild 13
        { 
            src: "bilder/bild13.jpg", 
            title: "Turnier Finale", 
            desc: "Das spannende Finale des Jugendturniers" 
        },
        
        // Bild 14
        { 
            src: "bilder/bild14.jpg", 
            title: "Auswärtsspiel", 
            desc: "Vorbereitung auf ein Auswärtsspiel" 
        },
        
        // Bild 15
        { 
            src: "bilder/bild15.jpg", 
            title: "Sieger Pokal", 
            desc: "Stolze Präsentation des gewonnenen Pokals" 
        },
        
        // Bild 16
        { 
            src: "bilder/bild16.jpg", 
            title: "Mannschaftsfoto", 
            desc: "Offizielles Mannschaftsfoto der Saison" 
        },
        
        // Bild 17
        { 
            src: "bilder/bild17.jpg", 
            title: "Trainer Team", 
            desc: "Unsere erfahrenen Trainer im Gespräch" 
        },
        
        // Bild 18
        { 
            src: "bilder/bild18.jpg", 
            title: "Nachwuchs Talente", 
            desc: "Junge Talente zeigen ihr Können" 
        },
        
        // Bild 19
        { 
            src: "bilder/bild19.jpg", 
            title: "Winter Training", 
            desc: "Training in der Halle während der Wintermonate" 
        },
        
        // Bild 20
        { 
            src: "bilder/bild20.jpg", 
            title: "Abschlussfeier", 
            desc: "Jahresabschluss mit allen Teams und Eltern" 
        }

        */
    ];
    
    // ========== GALERIE FUNKTIONEN ==========
    
    // 1. Finde die HTML Elemente
    const galerieContainer = document.getElementById('galerie-container');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    // Aktuelles Bild in Lightbox
    let aktuellesBildIndex = 0;
    
    // 2. Erstelle die Galerie
    function erstelleGalerie() {
        // Sicherstellen dass Container existiert
        if (!galerieContainer) {
            console.error('❌ Fehler: galerie-container nicht gefunden!');
            return;
        }
        
        // Leere den Container
        galerieContainer.innerHTML = '';
        
        console.log(`🖼️ Erstelle Galerie mit ${alleBilder.length} Bildern`);
        
        // Für jedes Bild ein Element erstellen
        alleBilder.forEach((bild, index) => {
            const bildElement = document.createElement('div');
            bildElement.className = 'galerie-item';
            bildElement.setAttribute('data-index', index);
            
            bildElement.innerHTML = `
                <img src="${bild.src}" alt="${bild.title}" loading="lazy">
                <div class="bild-overlay">
                    <h3>${bild.title}</h3>
                    <p>Bild ${index + 1} von ${alleBilder.length}</p>
                </div>
            `;
            
            // Klick Event für Lightbox
            bildElement.addEventListener('click', () => {
                oeffneLightbox(index);
            });
            
            // Zum Container hinzufügen
            galerieContainer.appendChild(bildElement);
        });
        
        console.log('✅ Galerie erfolgreich erstellt!');
    }
    
    // 3. Lightbox öffnen
    function oeffneLightbox(bildIndex) {
        aktuellesBildIndex = bildIndex;
        const bild = alleBilder[bildIndex];
        
        // Lightbox Inhalte setzen
        lightboxImg.src = bild.src;
        lightboxImg.alt = bild.title;
        lightboxTitle.textContent = bild.title;
        lightboxDesc.textContent = bild.desc;
        
        // Lightbox anzeigen
        lightbox.classList.add('aktiv');
        document.body.style.overflow = 'hidden';
        
        // Navigation Buttons anzeigen/verstecken
        lightboxPrev.style.display = alleBilder.length > 1 ? 'block' : 'none';
        lightboxNext.style.display = alleBilder.length > 1 ? 'block' : 'none';
        
        console.log(`🔍 Lightbox geöffnet: Bild ${bildIndex + 1} - ${bild.title}`);
    }
    
    // 4. Lightbox schließen
    function schliesseLightbox() {
        lightbox.classList.remove('aktiv');
        document.body.style.overflow = 'auto';
        console.log('🔒 Lightbox geschlossen');
    }
    
    // 5. Nächstes Bild
    function naechstesBild() {
        aktuellesBildIndex = (aktuellesBildIndex + 1) % alleBilder.length;
        oeffneLightbox(aktuellesBildIndex);
    }
    
    // 6. Vorheriges Bild
    function vorherigesBild() {
        aktuellesBildIndex = (aktuellesBildIndex - 1 + alleBilder.length) % alleBilder.length;
        oeffneLightbox(aktuellesBildIndex);
    }
    
    // 7. Event Listeners hinzufügen
    function setupEventListeners() {
        // Lightbox schließen
        if (lightboxClose) {
            lightboxClose.addEventListener('click', schliesseLightbox);
        }
        
        // Navigation in Lightbox
        if (lightboxPrev) {
            lightboxPrev.addEventListener('click', vorherigesBild);
        }
        
        if (lightboxNext) {
            lightboxNext.addEventListener('click', naechstesBild);
        }
        
        // Lightbox mit ESC schließen
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                schliesseLightbox();
            }
            if (event.key === 'ArrowRight') {
                naechstesBild();
            }
            if (event.key === 'ArrowLeft') {
                vorherigesBild();
            }
        });
        
        // Klick außerhalb des Bildes schließt Lightbox
        lightbox.addEventListener('click', function(event) {
            if (event.target === lightbox) {
                schliesseLightbox();
            }
        });
        
        console.log('🎮 Event Listeners aktiviert');
    }
    
    // 8. Initialisierung
    function init() {
        console.log('🚀 Starte Galerie Initialisierung...');
        
        // Galerie erstellen
        erstelleGalerie();
        
        // Event Listeners einrichten
        setupEventListeners();
        
        // Fehlerüberwachung für Bilder
        window.addEventListener('error', function(e) {
            if (e.target.tagName === 'IMG') {
                console.warn(`⚠️ Bild konnte nicht geladen werden: ${e.target.src}`);
                e.target.style.border = '2px solid red';
                e.target.title = 'Bild nicht gefunden! Pfad prüfen: ' + e.target.src;
            }
        }, true);
        
        console.log('✅ Galerie erfolgreich initialisiert!');
    }
    
    // 9. Galerie starten
    init();
    
});

// Fehlerbehandlung für fehlende Elemente
window.addEventListener('error', function(e) {
    console.error('❌ JavaScript Fehler:', e.message);
}); 