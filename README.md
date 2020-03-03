


folgende Funktionalität beinhaltet das Widget:
- Design lässt sich über das ändern der SASS/SCSS Variablen ganz einfach anpassen
- Anzeigen der exakten Kalendertage
- Vor und Zurück springen zwischen den Monaten
- Anzeige von Wochenden
- Anzeige des aktuellen Tages mit einem Rahmen in der Akzentfarbe
- Mit der Maus über Felder fahren/hovern, auswahlfähige Felder werden in der Akzentfarbe markiert
- Auswahl eines Datum durch klicken auf ein Feld. Dadurch wird es in einer Akzentfarbe solange markiert, bis auf ein anderes gültiges Feld geklickt wird
- Beim Klickvorgang bekommt der Nutzer ein Feedback in Form einer auftauchenden Anzeige des von Ihm ausgewählten Lieferdatums
- Dieses Lieferdatum bleibt dort solange stehen, bis der User auf ein anderes gültiges Feld geklickt hat. 
- Der Bestätigen-Button bleibt solange disabled, bis der User ein gültiges Feld ausgewählt hat. Button bleibt solange leicht ausgegraut. 
- User kann Lieferdatum aktuelles Datum nicht auswählen
- User kann kein Datum in der Vergangenheit auswählen
- User kann kein Datum an Samstagen und Sonntagen auswählen (lässt sich anpassen)
- User kann nur ein Lieferdatum auswählen, welches mindestens drei Tage nach dem aktuellen Systemzeit-Datum kommt
- User bekommt nach klicken auf den Bestätigen-Button ein erneutes Feedback in form eines alerts unter dem Kalender

Folgendes fehlt noch oder ist verbuggt
- Schaltjahre werden noch nicht berücksichtigt
- Feiertage werden noch nicht berücksichtigt
- Januar und Februar hat nur nicht mögliche auszuwählende Fehler in der Zukunft.

