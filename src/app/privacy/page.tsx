import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Code Permis Bénin",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg py-8 px-6">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-bg p-8">
        <a
          href="/"
          className="mb-6 inline-flex items-center gap-1 text-sm text-muted hover:text-fg"
        >
          ← Retour à l&apos;accueil
        </a>

        <h1 className="text-2xl font-bold text-fg">Politique de confidentialité</h1>
        <p className="mt-1 border-b border-border pb-4 text-sm text-muted">
          Code Permis Bénin — Dernière mise à jour : juillet 2026
        </p>

        <div className="my-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
          <p className="font-semibold">Déclaration APDP obligatoire</p>
          <p className="mt-1 text-sm">
            Conformément à l&apos;article 405 du Code du numérique, BTC a effectué la déclaration de
            ce traitement de données personnelles auprès de l&apos;Autorité de Protection des Données
            Personnelles (APDP Bénin — apdp.bj). La référence de déclaration est disponible sur
            demande écrite à privacy@btcbenin.com.
          </p>
        </div>

        <Section title="1 — Responsable du traitement">
          <p className="font-semibold">Identité du responsable (Art. 387–390)</p>
          <p className="mt-1">
            BÉNIN TECHNOLOGIE CONSULTING, Cotonou, République du Bénin.
            <br />
            Email DPO : privacy@btcbenin.com
          </p>
          <p className="mt-3">
            BTC a désigné un Responsable de la Protection des Données (DPO) conformément aux
            obligations imposées par le Code du numérique pour les responsables de traitement
            traitant des données personnelles à grande échelle (Art. 393).
          </p>
        </Section>

        <hr className="my-4 border-border" />

        <Section title="2 — Données collectées">
          <p className="font-semibold">Nature des données traitées (Art. 379–386)</p>
          <p className="mt-3 font-semibold">Espace Élève (traitement anonymisé) :</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>Identifiant technique d&apos;appareil — non nominatif, généré localement</li>
            <li>Empreinte technique (modèle, OS version) — finalité anti-fraude uniquement</li>
            <li>Données comportementales de progression (scores, catégories, fréquence)</li>
            <li>Numéro de téléphone haché (uniquement lors de la vérification OTP anti-fraude)</li>
          </ul>

          <div className="mt-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
            <p className="font-semibold">Principe de minimisation des données</p>
            <p className="mt-1 text-sm">
              Conformément à l&apos;article 396 du Code du numérique, BTC ne collecte que les données
              strictement nécessaires aux finalités déclarées. Aucune donnée sensible au sens de
              l&apos;article 400 (santé, origine ethnique, convictions) n&apos;est collectée.
            </p>
          </div>
        </Section>

        <hr className="my-4 border-border" />

        <Section title="3 — Finalités du traitement">
          <p className="font-semibold">Pourquoi vos données sont traitées (Art. 394–395)</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>Fourniture du service pédagogique de préparation au permis</li>
            <li>Gestion des accès premium et vérification des codes d&apos;activation</li>
            <li>Prévention de la fraude et sécurisation du système de comptage des essais</li>
            <li>Traitement des paiements via FedaPay (opérateur agréé en RB)</li>
            <li>Amélioration du contenu pédagogique (données agrégées et anonymisées)</li>
            <li>Gestion des réclamations et du support utilisateur</li>
          </ul>

          <div className="mt-4 rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
            <p className="font-semibold">Aucune finalité commerciale tierce</p>
            <p className="mt-1 text-sm">
              Conformément à l&apos;article 394 du Code du numérique, vos données ne sont pas
              utilisées à des fins autres que celles déclarées. BTC ne vend, ne loue et ne partage
              jamais vos données personnelles à des fins publicitaires ou commerciales avec des
              tiers.
            </p>
          </div>
        </Section>

        <hr className="my-4 border-border" />

        <Section title="4 — Droits des personnes concernées">
          <p className="font-semibold">Vos droits garantis par le Code du numérique</p>

          <div className="mt-3 space-y-3">
            <Right title="Droit d'accès (Art. 437)">
              Obtenir une copie de toutes les données personnelles que nous détenons à votre sujet.
              Réponse sous 30 jours.
            </Right>
            <Right title="Droit à la portabilité (Art. 438)">
              Recevoir vos données dans un format structuré, couramment utilisé et lisible par
              machine.
            </Right>
            <Right title="Droit d'interrogation (Art. 439)">
              Savoir si des données vous concernant sont traitées par BTC et dans quel cadre.
            </Right>
            <Right title="Droit d'opposition (Art. 440)">
              Vous opposer à certains traitements de vos données, notamment à des fins de
              profilage.
            </Right>
            <Right title="Droit de rectification / suppression (Art. 441)">
              Corriger des données inexactes ou obtenir l&apos;effacement de données traitées de
              façon illicite.
            </Right>
            <Right title="Droit à l'oubli (Art. 443)">
              Demander l&apos;effacement de vos données après la durée de conservation légale.
            </Right>
          </div>

          <p className="mt-4 text-sm">
            Pour exercer ces droits, adressez votre demande à privacy@btcbenin.com, accompagnée
            d&apos;une copie de votre pièce d&apos;identité. BTC s&apos;engage à répondre dans un
            délai de 30 jours conformément à l&apos;article 437 du Code du numérique.
          </p>

          <div className="mt-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
            <p className="font-semibold">Saisine de l&apos;APDP</p>
            <p className="mt-1 text-sm">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir
              l&apos;Autorité de Protection des Données Personnelles du Bénin (APDP) à
              l&apos;adresse : apdp.bj — Tél. : +229 21 32 57 88.
            </p>
          </div>
        </Section>

        <hr className="my-4 border-border" />

        <Section title="5 — Hébergement, sécurité et transferts">
          <p className="font-semibold">Protection technique des données (Art. 405–414)</p>
          <p className="mt-1 text-sm">
            Les données sont hébergées sur Supabase (chiffrement AES-256 au repos, protocole
            TLS/HTTPS en transit). Les données sensibles locales sont stockées via un stockage
            sécurisé chiffré sur l&apos;appareil.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span>Statut du chiffrement</span>
            <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
              ACTIF
            </span>
          </div>
          <p className="mt-3 text-sm">
            Les paiements sont traités par FedaPay, opérateur de paiement agréé en République du
            Bénin. BTC ne conserve aucune donnée de paiement.
          </p>
        </Section>

        <hr className="my-4 border-border" />

        <Section title="6 — Durées de conservation">
          <p className="font-semibold">Limitation de la conservation (Art. 396)</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>Données élève : 24 mois après la dernière utilisation active</li>
            <li>Journaux de connexion : 12 mois maximum puis suppression automatique</li>
            <li>
              Données de paiement : conservées par FedaPay selon leurs propres politiques
              réglementaires
            </li>
          </ul>
        </Section>

        <div className="mt-8 rounded-xl bg-surface p-6">
          <h3 className="text-base font-semibold">
            Notre délégué à la protection des données (DPO) est à votre disposition pour toute
            précision.
          </h3>
          <p className="mt-3 text-sm">privacy@btcbenin.com</p>
          <p className="text-sm">BÉNIN TECHNOLOGIE CONSULTING, Cotonou</p>
          <p className="text-sm">apdp.bj · +229 21 32 57 88</p>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 mt-6 text-lg font-semibold text-fg">{title}</h2>
      <div className="text-sm leading-relaxed">{children}</div>
    </section>
  );
}

function Right({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg bg-surface p-3">
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm">{children}</p>
    </div>
  );
}
