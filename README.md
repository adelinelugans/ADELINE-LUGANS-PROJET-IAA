# Proget IAA

Application React Native avec Expo, TypeScript et Expo Router.

## Lancer le projet

Depuis PowerShell, dans ce dossier :

```powershell
npm.cmd start
```

Installer [Expo Go](https://expo.dev/go) sur un téléphone, puis scanner le QR code du terminal. Le téléphone et le PC doivent être sur le même réseau. Expo Go doit prendre en charge le SDK du projet.

Version navigateur :

```powershell
npm.cmd run web
```

Émulateur Android déjà installé et démarré :

```powershell
npm.cmd run android
```

Le simulateur iOS nécessite macOS et Xcode. Un iPhone physique peut utiliser Expo Go.

## Supabase

Le client partagé est disponible via `import { supabase } from '@/lib/supabase'`.
Les sessions sont conservées entre les lancements et leur renouvellement suit
l'état de l'application sur mobile.

Copier `.env.example` vers `.env.local` après un clonage et renseigner l'URL du
projet et sa clé publique publishable (Settings → API Keys dans Supabase).
Redémarrer Expo après toute modification des variables d'environnement.
Ne jamais utiliser une clé secrète ou `service_role` dans l'application.

Les tables utilisées par l'application doivent avoir des politiques Row Level
Security adaptées. Aucun schéma de base de données ni écran de connexion n'est
créé par cette intégration.

Documentation : https://docs.expo.dev/guides/using-supabase/

## Développement

Modifier les écrans dans `src/app`. Expo Router utilise les fichiers de ce dossier pour définir les routes.

Après un nouveau clonage, installer les dépendances avec `npm.cmd ci`. Node.js LTS et npm sont nécessaires. Rouvrir le terminal après l'installation de Node.js pour actualiser le PATH.

Vérification TypeScript :

```powershell
npx.cmd tsc --noEmit
```

Documentation : [Expo](https://docs.expo.dev/get-started/start-developing/).
