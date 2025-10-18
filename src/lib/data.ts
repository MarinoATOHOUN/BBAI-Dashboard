import type { Employee, Project, Document, Announcement, Transaction, Notification, InternalMessage } from './types';
import { FileText, UserPlus, CheckCircle2, AlertTriangle, Briefcase } from 'lucide-react';

export const mockEmployees: Employee[] = [
  { id: '1', name: 'Amina Diallo', email: 'amina.d@blackben.ai', role: 'Admin', status: 'Active', salary: 120000, hireDate: '2022-01-15', avatarUrl: 'https://picsum.photos/seed/amina/100/100' },
  { id: '2', name: 'Moussa Traoré', email: 'moussa.t@blackben.ai', role: 'Manager', status: 'Active', salary: 95000, hireDate: '2022-03-01', avatarUrl: 'https://picsum.photos/seed/moussa/100/100' },
  { id: '3', name: 'Fatou Sow', email: 'fatou.s@blackben.ai', role: 'Employee', status: 'Active', salary: 70000, hireDate: '2023-05-20', avatarUrl: 'https://picsum.photos/seed/fatou/100/100' },
  { id: '4', name: 'Cheikh Diop', email: 'cheikh.d@blackben.ai', role: 'Employee', status: 'On Leave', salary: 72000, hireDate: '2022-08-10', avatarUrl: 'https://picsum.photos/seed/cheikh/100/100' },
  { id: '5', name: 'Ngozi Okafor', email: 'ngozi.o@blackben.ai', role: 'RH', status: 'Active', salary: 85000, hireDate: '2022-02-11', avatarUrl: 'https://picsum.photos/seed/ngozi/100/100' },
  { id: '6', name: 'Kwame Mensah', email: 'kwame.m@blackben.ai', role: 'Employee', status: 'Inactive', salary: 68000, hireDate: '2022-09-01', avatarUrl: 'https://picsum.photos/seed/kwame/100/100' },
];

export const mockProjects: Project[] = [
  {
    id: 'p1',
    title: 'Modèle de Langue Wolof',
    description: 'Développement d\'un LLM spécialisé pour la langue Wolof, axé sur la compréhension contextuelle et culturelle.',
    assignedMembers: [mockEmployees[0], mockEmployees[2]],
    status: 'In Progress',
  },
  {
    id: 'p2',
    title: 'API de Reconnaissance d\'Aliments Africains',
    description: 'Créer une API capable d\'identifier des plats et ingrédients africains à partir d\'images.',
    assignedMembers: [mockEmployees[1], mockEmployees[3], mockEmployees[4]],
    status: 'Completed',
  },
  {
    id: 'p3',
    title: 'Dashboard v2.0',
    description: 'Mise à niveau de l\'interface du tableau de bord interne pour améliorer l\'UX et ajouter de nouvelles fonctionnalités.',
    assignedMembers: [mockEmployees[1]],
    status: 'Planning',
  },
  {
    id: 'p4',
    title: 'Optimisation des infrastructures Cloud',
    description: 'Migration et optimisation de nos services sur une nouvelle architecture cloud pour réduire les coûts.',
    assignedMembers: [mockEmployees[0], mockEmployees[5]],
    status: 'On Hold',
  },
];

export const mockDocuments: Document[] = [
    { id: 'doc1', name: 'Contrat_Amina_Diallo.pdf', type: 'PDF', owner: 'Ngozi Okafor', uploadDate: '2022-01-15', access: ['Admin', 'RH'] },
    { id: 'doc2', name: 'Spec_API_Aliments.docx', type: 'Word', owner: 'Moussa Traoré', uploadDate: '2023-04-02', access: ['Admin', 'Manager'] },
    { id: 'doc3', name: 'Budget_T1_2024.xlsx', type: 'Spreadsheet', owner: 'Amina Diallo', uploadDate: '2024-04-01', access: ['Admin'] },
    { id: 'doc4', name: 'Maquette_Dashboard_v2.png', type: 'Image', owner: 'Moussa Traoré', uploadDate: '2024-05-10', access: ['Admin', 'Manager'] },
    { id: 'doc5', name: 'Politique_Teletravail.pdf', type: 'PDF', owner: 'Ngozi Okafor', uploadDate: '2024-05-15', access: ['Everyone'] },
];

export const mockAnnouncements: Announcement[] = [
    {
        id: 'an1',
        title: 'Bienvenue à notre nouvelle recrue !',
        content: 'Nous sommes ravis d\'accueillir Fatou Sow dans notre équipe en tant que Développeuse IA. Souhaitons-lui la bienvenue !',
        author: 'Ngozi Okafor',
        authorAvatarUrl: 'https://picsum.photos/seed/ngozi/100/100',
        date: '2023-05-20',
    },
    {
        id: 'an2',
        title: 'Fin du projet API de Reconnaissance',
        content: 'Félicitations à toute l\'équipe pour la finalisation réussie du projet API de Reconnaissance d\'Aliments. Une belle réussite collective !',
        author: 'Amina Diallo',
        authorAvatarUrl: 'https://picsum.photos/seed/amina/100/100',
        date: '2024-06-01',
    },
    {
        id: 'an3',
        title: 'Mise à jour de la politique de télétravail',
        content: 'Une nouvelle politique de télétravail a été mise en place. Veuillez consulter le document partagé dans le dossier RH pour plus de détails.',
        author: 'Ngozi Okafor',
        authorAvatarUrl: 'https://picsum.photos/seed/ngozi/100/100',
        date: '2024-05-15',
    }
];

export const mockTransactions: Transaction[] = [
    { id: 't1', description: 'Salaires Mai 2024', amount: 45000, type: 'Expense', date: '2024-05-30', category: 'Salary' },
    { id: 't2', description: 'Abonnement AWS', amount: 5000, type: 'Expense', date: '2024-05-28', category: 'Operations' },
    { id: 't3', description: 'Paiement ClientCorp', amount: 75000, type: 'Income', date: '2024-05-25', category: 'Revenue' },
    { id: 't4', description: 'Campagne Marketing LinkedIn', amount: 2500, type: 'Expense', date: '2024-05-20', category: 'Marketing' },
    { id: 't5', description: 'Remboursement frais de déplacement', amount: 350, type: 'Expense', date: '2024-05-18', category: 'Other' },
    { id: 't6', description: 'Salaires Avril 2024', amount: 44000, type: 'Expense', date: '2024-04-30', category: 'Salary' },
    { id: 't7', description: 'Paiement Innovatech', amount: 60000, type: 'Income', date: '2024-04-22', category: 'Revenue' },
];

export const financialChartData = [
  { month: "Jan", income: 40000, expenses: 24000 },
  { month: "Feb", income: 30000, expenses: 13980 },
  { month: "Mar", income: 50000, expenses: 32000 },
  { month: "Apr", income: 60000, expenses: 39080 },
  { month: "May", income: 75000, expenses: 48000 },
  { month: "Jun", income: 70000, expenses: 43000 },
];

export const mockNotifications: Notification[] = [
    {
      id: 'notif1',
      title: 'Nouveau document ajouté',
      description: 'Le document "Budget_T1_2024.xlsx" a été ajouté par Amina Diallo.',
      date: 'Il y a 15 minutes',
      read: false,
      icon: FileText,
    },
    {
      id: 'notif2',
      title: 'Nouvel employé',
      description: 'Fatou Sow a rejoint l\'équipe. Souhaitez-lui la bienvenue !',
      date: 'Il y a 1 heure',
      read: false,
      icon: UserPlus,
    },
    {
      id: 'notif3',
      title: 'Projet terminé',
      description: 'Le projet "API de Reconnaissance d\'Aliments Africains" a été marqué comme terminé.',
      date: 'Il y a 5 heures',
      read: true,
      icon: CheckCircle2,
    },
    {
      id: 'notif4',
      title: 'Alerte budget',
      description: 'Le budget marketing a dépassé le seuil de 80%.',
      date: 'Hier',
      read: false,
      icon: AlertTriangle,
    },
    {
      id: 'notif5',
      title: 'Mise à jour de projet',
      description: 'Le projet "Modèle de Langue Wolof" est maintenant en phase de test.',
      date: 'Il y a 2 jours',
      read: true,
      icon: Briefcase,
    },
];

export const mockMessages: InternalMessage[] = [
    {
      id: 'msg1',
      sender: mockEmployees[1],
      recipient: 'amina.d@blackben.ai',
      subject: 'Point sur le projet Wolof',
      body: 'Bonjour Amina,\n\nPourrions-nous faire un point rapide sur l\'avancement du projet de LLM Wolof cette semaine ? Je pense que nous avons des résultats préliminaires intéressants à discuter.\n\nMerci,\nMoussa',
      date: 'Aujourd\'hui, 10:30',
      read: false,
    },
    {
      id: 'msg2',
      sender: mockEmployees[4],
      recipient: 'amina.d@blackben.ai',
      subject: 'Demande de validation des congés',
      body: 'Bonjour Amina,\n\nJ\'ai soumis une demande de congés pour la semaine prochaine via le portail RH. Pourriez-vous la valider dès que possible ?\n\nBien à vous,\nNgozi',
      date: 'Hier, 15:45',
      read: true,
    },
    {
      id: 'msg3',
      sender: mockEmployees[2],
      recipient: 'amina.d@blackben.ai',
      subject: 'Re: Question sur la nouvelle API',
      body: 'Bonjour,\n\nMerci pour la documentation. C\'est beaucoup plus clair maintenant. Je vais pouvoir avancer sur l\'intégration.\n\nCordialement,\nFatou',
      date: 'Il y a 3 jours',
      read: true,
    }
];


// Mock data for AI Insights
export const mockDashboardDataForAI = {
  employeePerformanceData: JSON.stringify([
    { employeeId: '3', kpi: 'tasks_completed', value: 0.95, period: 'Q2 2024' },
    { employeeId: '4', kpi: 'tasks_completed', value: 0.60, period: 'Q2 2024' },
    { employeeId: '1', kpi: 'leadership_score', value: 0.98, period: 'Q2 2024' },
    { employeeId: '2', kpi: 'leadership_score', value: 0.92, period: 'Q2 2024' },
  ]),
  projectSuccessData: JSON.stringify([
    { projectId: 'p1', status: 'on_track', onTimeCompletion: 0.9 },
    { projectId: 'p2', status: 'completed', onTimeCompletion: 1.0, budgetAdherence: 0.95 },
    { projectId: 'p4', status: 'on_hold', reason: 'resource_allocation' },
  ]),
  budgetAdherenceData: JSON.stringify([
    { department: 'Tech', budget: 100000, actual: 95000, period: 'Q2 2024' },
    { department: 'Marketing', budget: 15000, actual: 17500, period: 'Q2 2024' },
    { department: 'HR', budget: 20000, actual: 19000, period: 'Q2 2024' },
  ]),
};
