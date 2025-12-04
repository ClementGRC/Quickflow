/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.WorkflowStepInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workflowStep.createMany(input as any))),

        create: procedure.input($Schema.WorkflowStepInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workflowStep.create(input as any))),

        deleteMany: procedure.input($Schema.WorkflowStepInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workflowStep.deleteMany(input as any))),

        delete: procedure.input($Schema.WorkflowStepInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workflowStep.delete(input as any))),

        findFirst: procedure.input($Schema.WorkflowStepInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).workflowStep.findFirst(input as any))),

        findMany: procedure.input($Schema.WorkflowStepInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).workflowStep.findMany(input as any))),

        findUnique: procedure.input($Schema.WorkflowStepInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).workflowStep.findUnique(input as any))),

        updateMany: procedure.input($Schema.WorkflowStepInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workflowStep.updateMany(input as any))),

        update: procedure.input($Schema.WorkflowStepInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workflowStep.update(input as any))),

        count: procedure.input($Schema.WorkflowStepInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).workflowStep.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.WorkflowStepCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkflowStepCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkflowStepCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkflowStepCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.WorkflowStepCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkflowStepCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorkflowStepGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorkflowStepGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkflowStepCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkflowStepCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorkflowStepGetPayload<T>, Context>) => Promise<Prisma.WorkflowStepGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.WorkflowStepDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkflowStepDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkflowStepDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkflowStepDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.WorkflowStepDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkflowStepDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorkflowStepGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorkflowStepGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkflowStepDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkflowStepDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorkflowStepGetPayload<T>, Context>) => Promise<Prisma.WorkflowStepGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.WorkflowStepFindFirstArgs, TData = Prisma.WorkflowStepGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.WorkflowStepFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WorkflowStepGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorkflowStepFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.WorkflowStepFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WorkflowStepGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WorkflowStepGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.WorkflowStepFindManyArgs, TData = Array<Prisma.WorkflowStepGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.WorkflowStepFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.WorkflowStepGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorkflowStepFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.WorkflowStepFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.WorkflowStepGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.WorkflowStepGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.WorkflowStepFindUniqueArgs, TData = Prisma.WorkflowStepGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.WorkflowStepFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WorkflowStepGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorkflowStepFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WorkflowStepFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WorkflowStepGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WorkflowStepGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.WorkflowStepUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkflowStepUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkflowStepUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkflowStepUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.WorkflowStepUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkflowStepUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorkflowStepGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorkflowStepGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkflowStepUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkflowStepUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorkflowStepGetPayload<T>, Context>) => Promise<Prisma.WorkflowStepGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.WorkflowStepCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.WorkflowStepCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.WorkflowStepCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.WorkflowStepCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.WorkflowStepCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.WorkflowStepCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.WorkflowStepCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.WorkflowStepCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
