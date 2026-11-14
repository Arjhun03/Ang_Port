import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      title: 'DGDF-RAG',
      description:
        'A domain-specific Retrieval-Augmented Generation system for legal question answering using vector search, knowledge graphs, and LLMs.',
      technologies: ['.NET', 'RAG', 'Pinecone', 'Neo4j', 'LLM'],
    },
    {
      title: 'Movie Ticket Booking System',
      description:
        'A backend-driven movie ticket booking system with movie, theatre, screen, seat, show, booking, and booking-seat management.',
      technologies: ['C#', '.NET', 'ASP.NET Core', 'EF Core', 'SQL Server'],
    },
    {
      title: 'Campus Management System',
      description:
        'A campus management platform for managing students, companies, placement officers, job openings, and placement-related workflows.',
      technologies: ['C#', '.NET', 'ASP.NET Core', 'EF Core', 'JWT'],
    },
  ];
}